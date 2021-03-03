export default class Problem {
    id: string;
    title: string;
    problemType: string;
    latitude: any;
    longitude: any;
    time: string;
    severity: string;
    comment: string;
  
    constructor(
      id: string,
      title: string,
      problemType: string,
      latitude: any,
      longitude: any,
      time: string,
      severity: string,
      comment: string
    ) {
      this.id = id;
      this.title = title;
      this.problemType = problemType;
      this.latitude = latitude;
      this.longitude = longitude;
      this.time = time;
      this.severity = severity;
      this.comment = comment;
    }
  }
  