const loadMeasures = () => {
  const highlightMeasure = document.querySelector(".highlight-measure");
  const normalMeasure = document.querySelector(".normal-measure");
  
  if (highlightMeasure) {
    for (let measure of highlightJson) {
      let div = document.createElement("div");
      div.innerHTML = `<span>${measure.amount}</span><p>${measure.title}</p>`;
      highlightMeasure.appendChild(div);
    }
  }

  if (normalMeasure) {
    for (let measure of normalJson) {
      let div = document.createElement("div");
      div.innerHTML = `<span></span><span>${measure.amount}</span><span>${measure.title}</span>`;
      normalMeasure.appendChild(div);
    }
  }
};

window.onload = loadMeasures;

const highlightJson = [
  {
    "amount": 34492,
    "title": "Missing Video"
  },
  {
    "amount": 15457,
    "title": "No Custom Photos"
  },
  {
    "amount": 3039,
    "title": "No Interior Color"
  }
];

const normalJson = [
  {
    "amount": 2208,
    "title": "One Photo"
  },
  {
    "amount": 640,
    "title": "No Photos"
  },
  {
    "amount": 635,
    "title": "No Exterior Color"
  },
  {
    "amount": 625,
    "title": "No Comments"
  },
  {
    "amount": 4,
    "title": "No VIN"
  }
];
