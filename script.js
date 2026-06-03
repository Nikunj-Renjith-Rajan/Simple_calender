const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let date = new Date();

function renderCalendar() {
  calendar.innerHTML = "";

  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  monthYear.textContent = `${date.toLocaleString("default", { month: "long" })} ${year}`;

  // Add empty slots for first week
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    calendar.appendChild(empty);
  }

  // Add days
  for (let d = 1; d <= lastDate; d++) {
    const day = document.createElement("div");
    day.textContent = d;

    const today = new Date();
    if (
      d === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      day.classList.add("today");
    }

    calendar.appendChild(day);
  }
}

prevMonth.onclick = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};

nextMonth.onclick = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

renderCalendar();
