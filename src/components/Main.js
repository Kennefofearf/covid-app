import React from 'react'
import { Bar } from 'react-chartjs-2'
import "chart.js/auto"

export default function Main(props) {
    var { selected, data } = props

    if (selected === 'Global') {
        return <div>
            Click the dropdown and select a country to view Covid-19 cases vs deaths.
        </div>
        /* When the country selection is not Global: display confirmed and deaths */
    } else if (selected !== 'Global') {
      var deaths = data.data.deaths
      var confirmed = data.data.confirmed
    }
  return (
    <div className='Main'>
    <div style={{ maxWidth: "650px" }}>

{/* Creates a bar graph to display the data */}

        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: [`Confirmed Cases: ${confirmed}`, `Deaths: ${deaths}`],
            datasets: [
              {
                // Label for bars
                label: `Cases for ${selected}`,
                // Data or value of your each variable
                data: [confirmed, deaths],
                // Color of each bar
                backgroundColor: ["red", "black"],
                // Border color of each bar
                borderColor: ["black"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={300}
          options={{
            maintainAspectRatio: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 10,
              },
            },
          }}
        />
      </div>
    </div>
  );
}