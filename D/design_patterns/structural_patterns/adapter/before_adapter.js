class DataAnalyser {
  analyseData(jsonData) {
    console.log(`analysis hapening ${jsonData}`);
  }
}


class User extends DataAnalyser {
  constructor() {
   super();
  }

  startAnalysiss(xmlData) {
    this.analyseData(xmlData);
  }
}


let rohan = new User();



rohan.analyseData("XML DATA DE RAHHU ");