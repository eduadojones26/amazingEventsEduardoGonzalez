
    document.addEventListener("DOMContentLoaded", function () {
        fetch("https://aulamindhub.github.io/amazing-api/events.json")
            .then(response => response.json())
            .then(data => {
                const events = data.events;
                const currentDate = new Date(data.currentDate);
    
                // Calcular estadísticas generales
                let highestAttendanceEvent = null;
                let lowestAttendanceEvent = null;
                let largestCapacityEvent = null;
    
                events.forEach(event => {
                    if (event.assistance !== undefined) { // Solo considerar eventos pasados 
                        const attendancePercentage = (event.assistance / event.capacity) * 100;
    
                        if (!highestAttendanceEvent || attendancePercentage > (highestAttendanceEvent.assistance / highestAttendanceEvent.capacity) * 100) {
                            highestAttendanceEvent = event;
                        }
    
                        if (!lowestAttendanceEvent || attendancePercentage < (lowestAttendanceEvent.assistance / lowestAttendanceEvent.capacity) * 100) {
                            lowestAttendanceEvent = event;
                        }
                    }
    
                    if (!largestCapacityEvent || event.capacity > largestCapacityEvent.capacity) {
                        largestCapacityEvent = event;
                    }
                });
    
                document.getElementById("highest-attendance").innerText = `${highestAttendanceEvent.name} (${((highestAttendanceEvent.assistance / highestAttendanceEvent.capacity) * 100).toFixed(2)}%)`;
                document.getElementById("lowest-attendance").innerText = `${lowestAttendanceEvent.name} (${((lowestAttendanceEvent.assistance / lowestAttendanceEvent.capacity) * 100).toFixed(2)}%)`;
                document.getElementById("largest-capacity").innerText = `${largestCapacityEvent.name} (${largestCapacityEvent.capacity})`;
    
                // Calcular estadísticas por categoría
                const upcomingEvents = events.filter(event => new Date(event.date) > currentDate);
                const pastEvents = events.filter(event => new Date(event.date) <= currentDate);
    
                const upcomingStats = calculateCategoryStats(upcomingEvents, 'estimate');
                const pastStats = calculateCategoryStats(pastEvents, 'assistance');
    
                renderCategoryStats("upcoming-stats", upcomingStats);
                renderCategoryStats("past-stats", pastStats);
            })
            .catch(error => console.error("Error fetching data:", error));
    });
    
    function calculateCategoryStats(events, attendanceField) {
        const categoryStats = {};
    
        events.forEach(event => {
            if (!categoryStats[event.category]) {
                categoryStats[event.category] = { revenue: 0, attendance: 0, capacity: 0 };
            }
    
            categoryStats[event.category].revenue += event.price * event[attendanceField];
            categoryStats[event.category].attendance += event[attendanceField];
            categoryStats[event.category].capacity += event.capacity;
        });
    
        for (const category in categoryStats) {
            categoryStats[category].attendancePercentage = (categoryStats[category].attendance / categoryStats[category].capacity) * 100;
        }
    
        return categoryStats;
    }
    
    function renderCategoryStats(tableId, stats) {
        const tbody = document.getElementById(tableId);
        tbody.innerHTML = "";
    
        let index = 1;
        for (const category in stats) {
            const row = document.createElement("tr");
    
            const indexCell = document.createElement("th");
            indexCell.scope = "row";
            indexCell.innerText = index++;
            row.appendChild(indexCell);
    
            const categoryCell = document.createElement("td");
            categoryCell.innerText = category;
            row.appendChild(categoryCell);
    
            const revenueCell = document.createElement("td");
            revenueCell.innerText = `$${stats[category].revenue.toFixed(2)}`;
            row.appendChild(revenueCell);
    
            const attendanceCell = document.createElement("td");
            attendanceCell.innerText = `${stats[category].attendancePercentage.toFixed(2)}%`;
            row.appendChild(attendanceCell);
    
            tbody.appendChild(row);
        }
    }
    