const cDate = new Date();
const cDay = cDate.getDate();
const cMonth = cDate.getMonth() + 1;
const cYear = cDate.getFullYear();

const noteDate = `${cDay}:${cMonth}:${cYear}`;

const keywordsArr = [];

const downloadToFile = (content, filename, contentType) => {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });

  // a.href = URL.createObjectURL(file);
  // a.download = filename;
  // a.click();

  // URL.revokeObjectURL(a.href);
  showNotes(file);
};

const reader = new FileReader();

const showNotes = (file) => {
  reader.readAsArrayBuffer(file);
  document.querySelector("p").textContent = file.text();
};

document.querySelector(".btnSave").addEventListener("click", () => {
  keywordsArr.forEach((kword) => {
    const li = document
      .querySelector("div.notesList ul")
      .appendChild(document.createElement("li"));
    li.textContent = kword;
  });
  // downloadToFile(textArea.value, `notatka${noteDate}.txt`, "text/plain");
});
const keyword = document.querySelector("input.keywords");

document.querySelector(".btnAdd").addEventListener("click", () => {
  keywordCheck(keyword.value);
});

keyword.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    keywordCheck(keyword.value);
  }
});

const keywordCheck = (keyword, event) => {
  let string = keyword;
  string = string.replace(/\s/g, "");
  string = string.toLowerCase();

  if (keywordsArr.length === 0) {
    keywordsArr.unshift(string);
  } else {
    const retValue = keywordsArr.findIndex((el) => el === string);

    if (retValue === -1) {
      keywordsArr.unshift(string);
    } else {
      alert("To słowo kluczowe już istnieje");
    }
  }
};
