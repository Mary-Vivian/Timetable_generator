const timetableBody = document.getElementById("timetable-body");
const lessonForm = document.getElementById("lesson-form");

lessonForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const day = document.getElementById("day").value;
  const time = document.getElementById("time").value;
  const lesson = document.getElementById("lesson").value;

  if (isLessonAlreadyScheduled(day, time)) {
    alert("A lesson is already scheduled for this day and time.");
    return;
  }

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${day}</td>
    <td>${time}</td>
    <td>${lesson}</td>
    <td><button class="delete-button">Delete</button></td>
  `;
  timetableBody.appendChild(newRow);

  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach(button => {
    button.addEventListener("click", function() {
      this.parentNode.parentNode.remove();
    });
  });

  lessonForm.reset();
});

function isLessonAlreadyScheduled(day, time) {
  const existingLessons = document.querySelectorAll("#timetable-body tr");
  for (const row of existingLessons) {
    const existingDay = row.querySelector("td:first-child").textContent;
    const existingTime = row.querySelector("td:nth-child(2)").textContent;
    if (existingDay === day && existingTime === time) {
      return true;
    }
  }
  return false;
}



