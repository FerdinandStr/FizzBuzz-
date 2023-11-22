import React, { useEffect, useState } from "react"
import CanvasJSReact from "@canvasjs/react-charts"
const CanvasJSChart = CanvasJSReact.CanvasJSChart

export default function Chart(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(convertToChartData(props.data))
    }, [props.data])

    const options = {
        title: {
            text: "Basic Column Chart",
        },
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                dataPoints: data,
            },
        ],
    }

    return (
        <div>
            <CanvasJSChart
                options={options}
                /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    )
}

function convertToChartData(fizzBuzzOutput) {
    if (fizzBuzzOutput && fizzBuzzOutput.length > 0) {
        return fizzBuzzOutput.reduce((acc, el) => {
            const index = acc.findIndex((findEl) => {
                if (isNaN(el)) {
                    //text zuordnen
                    return findEl.label && findEl.label == el ? true : false
                } else {
                    //zahl zuordnen
                    return findEl.label && !isNaN(findEl.label) ? true : false
                }
            })

            if (index != -1) {
                acc[index] = { label: el, y: acc[index].y + 1 }
                return acc
            } else {
                return [...acc, { label: el, y: 1 }]
            }
        }, [])
    }
}
