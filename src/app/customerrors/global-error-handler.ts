import {ErrorHandler} from '@angular/core';

export class GlobalErrorHandler implements ErrorHandler{
  handleError(error: any): void {
    // console.log('in global error handler');
    // console.log(error);
    alert('unexpected error occured');
  }
}