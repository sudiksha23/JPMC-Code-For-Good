var chart_label='Mumbai';
var chart_type='';

const ctx = document.getElementById('chart').getContext('2d');
const wasteChart = new Chart(ctx, {
    type: chart_type,
    data: {
        labels: ['District 1', 'District 2', 'District 3', 'District 4', 'District 5', 'District 6'],
        datasets: [{
            label: chart_label,
            data: [6, 8, 3, 5, 4, 3],
            backgroundColor: [
                'red',
                'blue',
                'green',
                'violet',
                'cyan',
                'yellow'
            ],
            borderColor: [
                'yellow',
                'cyan',
                'violet',
                'green',
                'blue',
                'red'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title:{
            display:true,
            text:chart_title,
            fontSize:15
        },
    }
});