import { useRef, useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from '@amcharts/amcharts4/maps'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import am4geodata_canadaLow from '@amcharts/amcharts4-geodata/canadaLow'

am4core.useTheme(am4themes_animated)

export default function MapCanadaVaccines() {
  const chartElement = useRef(null)

  useEffect(() => {
    const chart = am4core.create('map-canada-vaccines', am4maps.MapChart)

    chart.maxZoomLevel = 64

    chart.geodata = am4geodata_canadaLow

    chart.projection = new am4maps.projections.Mercator()

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

    chartElement.current = chart

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <div
      id="map-canada-vaccines"
      className="w-full"
      style={{ height: '500px' }}
    ></div>
  )
}
