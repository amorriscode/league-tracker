import { useRef, useEffect, useState } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from '@amcharts/amcharts4/maps'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import am4geodata_canadaLow from '@amcharts/amcharts4-geodata/canadaLow'

am4core.useTheme(am4themes_animated)

const provinceNameToCode = {
  Nunavut: 'NU',
  'Northwest Territories': 'NT',
  Yukon: 'YT',
  'British Columbia': 'BC',
  Alberta: 'AB',
  Saskatchewan: 'SK',
  Manitoba: 'MB',
  Ontario: 'ON',
  Quebec: 'QC',
  'Newfoundland and Labrador': 'NL',
  'New Brunswick': 'NB',
  'Nova Scotia': 'NS',
  'Prince Edward Island': 'PE',
}

const provinceCodetoName = {
  NU: 'Nunavut',
  NT: 'Northwest Territories',
  YT: 'Yukon',
  BC: 'British Columbia',
  AB: 'Alberta',
  SK: 'Saskatchewan',
  MB: 'Manitoba',
  ON: 'Ontario',
  QC: 'Quebec',
  NL: 'Newfoundland and Labrador',
  NB: 'New Brunswick',
  NS: 'Nova Scotia',
  PE: 'Prince Edward Island',
}

export default function MapCanadaVaccines() {
  const chartElement = useRef(null)
  const [hoverProvince, setHoverProvince] = useState('ON')
  const [vaccinationData, setVaccinationData] = useState({
    Canada: 2231669,
    Ontario: 820714,
    'British Columbia': 298851,
    Alberta: 266231,
    Saskatchewan: 86879,
    'Nova Scotia': 38676,
    Manitoba: 84937,
    'New Brunswick': 33741,
    'Newfoundland and Labrador': 24757,
    'Prince Edward Island': 13281,
    'Northwest Territories': 19775,
    Nunavut: 13911,
    Quebec: 510479,
    Yukon: 19437,
  })

  useEffect(() => {
    const chart = am4core.create('map-canada-vaccines', am4maps.MapChart)

    chart.maxZoomLevel = 64

    chart.geodata = am4geodata_canadaLow

    chart.projection = new am4maps.projections.Mercator()

    chart.homeZoomLevel = 2
    chart.homeGeoPoint = {
      latitude: 60,
      longitude: -96.8279,
    }

    // Create map polygon series
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries())
    polygonSeries.useGeodata = true

    polygonSeries.heatRules.push({
      property: 'fill',
      target: polygonSeries.mapPolygons.template,
      min: am4core.color('#B9A4ED'),
      max: am4core.color('#501CD2'),
      logarithmic: true,
    })

    const polygonTemplate = polygonSeries.mapPolygons.template
    polygonTemplate.tooltipText = '{name}'
    polygonTemplate.fill = am4core.color('#B9A4ED')

    const hoverState = polygonTemplate.states.create('hover')
    hoverState.properties.fill = am4core.color('#501CD2')

    // Creates a series
    function createSeries(heatfield) {
      const series = chart.series.push(new am4maps.MapImageSeries())
      series.dataFields.value = heatfield

      const template = series.mapImages.template
      template.verticalCenter = 'middle'
      template.horizontalCenter = 'middle'
      template.propertyFields.latitude = 'lat'
      template.propertyFields.longitude = 'long'
      template.tooltipText = '{name}:\n[bold]{vaccinations} vaccinations[/]'

      const circle = template.createChild(am4core.Circle)
      circle.radius = 10
      circle.fillOpacity = 0.7
      circle.verticalCenter = 'middle'
      circle.horizontalCenter = 'middle'
      circle.nonScaling = true
      circle.fill = am4core.color('#EDE8FA')

      const label = template.createChild(am4core.Label)
      label.text = '{vaccinations}'
      label.fill = am4core.color('#000')
      label.verticalCenter = 'middle'
      label.horizontalCenter = 'middle'
      label.nonScaling = true

      const heat = series.heatRules.push({
        target: circle,
        property: 'radius',
        min: 10,
        max: 30,
      })

      return series
    }

    let regionalSeries = {}
    let currentSeries

    function setupData() {
      // Init country-level series
      regionalSeries.CA = {
        markerData: [],
        series: createSeries('vaccinations'),
      }

      // Set current series
      currentSeries = regionalSeries.CA.series

      // Process data
      for (const [province, vaccinations] of Object.entries(vaccinationData)) {
        if (province === 'Canada') continue

        const provinceCode = provinceNameToCode[province]
        if (!regionalSeries[provinceCode]) {
          const provincePolygon = polygonSeries.getPolygonById(
            `CA-${provinceCode}`
          )

          if (provincePolygon) {
            regionalSeries[provinceCode] = {
              target: provinceCode,
              name: provincePolygon.dataItem.dataContext.name,
              lat: provincePolygon.visualLatitude,
              long: provincePolygon.visualLongitude,
              vaccinations,
              markerData: [],
            }

            regionalSeries.CA.markerData.push(regionalSeries[provinceCode])
          }
        } else {
          return
        }
      }

      regionalSeries.CA.series.data = regionalSeries.CA.markerData
    }

    chart.events.on('ready', setupData)

    polygonSeries.tooltip.label.adapter.add('textOutput', (text, target) => {
      setHoverProvince(provinceNameToCode[text] || 'ON')
      return text
    })

    chartElement.current = chart

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <div className="grid grid-cols-3 w-full">
      <div
        id="map-canada-vaccines"
        className="col-span-2"
        style={{ height: '600px' }}
      ></div>

      <div className="space-y-8">
        <h2 className="font-bold text-2xl mb-4">
          Cumulative Number of Doses Administered
        </h2>

        <div className="w-full bg-brand-teal-dark text-white p-8 text-2xl rounded-lg">
          <p className="text-4xl font-extrabold">
            {vaccinationData[provinceCodetoName[hoverProvince]]}
          </p>
          <h3 className="font-bold text-sm">
            Total Doses Administered in {provinceCodetoName[hoverProvince]}
          </h3>
        </div>

        <div className="w-full bg-brand-teal-dark text-white p-8 text-2xl rounded-lg">
          <p className="text-4xl font-extrabold">{vaccinationData.Canada}</p>
          <h3 className="font-bold text-sm">
            Total Doses Administered in Canada
          </h3>
        </div>
      </div>
    </div>
  )
}
