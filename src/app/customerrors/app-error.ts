export class AppError{
    constructor(  public orginalError?: any) {
      alert(orginalError);
      console.log(orginalError);
    }
  }