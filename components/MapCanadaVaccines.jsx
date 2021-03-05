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
  NU: 'Nunvaut',
  NT: 'Northwest Territories',
  YT: 'Yukon',
  BC: 'British Columbia',
  AB: 'Alberta',
  SK: 'Saskatchewan',
  MB: 'Manitoba',
  ON: 'Ontario',
  QC: 'Qubec',
  NL: 'Newfoundland and Labrador',
  NB: 'New Brunswick',
  NS: 'Nova Scotia',
  PE: 'Prince Edward Island',
}

export default function MapCanadaVaccines() {
  const chartElement = useRef(null)
  const [hoverProvince, setHoverProvince] = useState('')

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
      am4core.array.each(
        [
          { province: 'BC', vaccinations: 10000 },
          { province: 'ON', vaccinations: 100000 },
        ],
        (data) => {
          if (!regionalSeries[data.province]) {
            const provincePolygon = polygonSeries.getPolygonById(
              `CA-${data.province}`
            )

            if (provincePolygon) {
              regionalSeries[data.province] = {
                target: data.province,
                name: provincePolygon.dataItem.dataContext.name,
                lat: provincePolygon.visualLatitude,
                long: provincePolygon.visualLongitude,
                vaccinations: data.vaccinations,
                markerData: [],
              }

              regionalSeries.CA.markerData.push(regionalSeries[data.province])
            }
          } else {
            return
          }
        }
      )

      regionalSeries.CA.series.data = regionalSeries.CA.markerData
    }

    chart.events.on('ready', setupData)

    polygonSeries.tooltip.label.adapter.add('textOutput', (text, target) => {
      setHoverProvince(provinceNameToCode[text])
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

        <div>
          <h3 className="font-bold">
            Total Doses Administered in {provinceCodetoName[hoverProvince]}:
          </h3>
          <p>300</p>
        </div>

        <div>
          <h3 className="font-bold">Total Doses Administered in Canada:</h3>
          <p>300</p>
        </div>

        <div>
          <h3 className="font-bold">Total Doses Administered Worldwide:</h3>
          <p>300</p>
        </div>

        <div>
          <h3 className="font-bold">Vaccine Type/Name Distribution:</h3>
          <p>300</p>
        </div>

        <div>
          <h3 className="font-bold">Phasing Strategy:</h3>
          <p>300</p>
        </div>

        <div>
          <h3 className="font-bold">Last Updated:</h3>
          <p>300</p>
        </div>
      </div>
    </div>
  )
}
