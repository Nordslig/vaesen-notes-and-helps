const btnSaveNote = document.querySelector("button");

const notes = [];

let note = document.querySelector("#note");

btnSaveNote.addEventListener("click", () => {
  const noteValue = note.value;

  const cDate = new Date();
  const cDay = cDate.getDate();
  const cMonth = cDate.getMonth() + 1;
  const cYear = cDate.getFullYear();

  const noteDate = `${cDay}:${cMonth}:${cYear}`;

  localStorage.setItem("Notatka:", noteValue);
  localStorage.setItem("Data:", noteDate);

  // const noteText = localStorage.getItem("Notatka:");
  // const noteDate = localStorage.get

  document.querySelector("span.date").textContent = noteValue;
  document.querySelector("p.text").textContent = noteDate;

  saveNotes();
});

const saveNotes = () => {
  const noteDetails = {};

  document.querySelector("p.text");
};
