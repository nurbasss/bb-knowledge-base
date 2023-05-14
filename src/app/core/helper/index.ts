import { FormGroup } from '@angular/forms';
import { NotificationComponent } from '@app/shared/components/notification/notification.component';

export function generateRandomColor(i: number): string {
  switch (i) {
    case 1:
      return '#ffaaa6';
    case 2:
      return '#a8e6ce';
    case 3:
      return '#b5d3ff';
    case 4:
      return '#ddd5cc';
    case 5:
      return '#fcd1b5';
    case 6:
      return '#dce6dc';
    case 7:
      return '#abced9';
    case 8:
      return '#e997c1';
    case 9:
      return '#c8cfdc';
    case 10:
      return '#8c8cc5';
    default:
      return '#a8e6ce';
  }
}

function showMessage(message: string, toastr: any, type: string) {
  const toast = toastr.show(message, 'Push notification', {
    toastComponent: NotificationComponent,
    closeButton: true,
    tapToDismiss: false,
    timeOut: 5000,
    extendedTimeOut: 5000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
  });
  toast.toastRef.componentInstance.notification = {
    title: message,
    type,
  };
}

export const errorMessage = (error: any, toastr: any) => {
  const msg = error?.message || 'Произошла неизвестная ошибка';
  showMessage(msg, toastr, 'error');
};

export const successMessage = (message: string = '', toastr: any) => {
  const msg = message || 'Успешно';
  showMessage(msg, toastr, 'success');
};

export const warningMessage = (message: string = '', toastr: any) => {
  showMessage(message, toastr, 'warning');
};

export function formateDate(_date: string) {
  const date = _date.split(' ')[0].split('-');
  const day = date[2];
  const month = Number(date[1]);
  const year = date[0];
  let textMonth = '';
  switch (month) {
    case 1:
      textMonth = 'января';
      break;
    case 2:
      textMonth = 'февраля';
      break;
    case 3:
      textMonth = 'марта';
      break;
    case 4:
      textMonth = 'апреля';
      break;
    case 5:
      textMonth = 'мая';
      break;
    case 6:
      textMonth = 'июня';
      break;
    case 7:
      textMonth = 'июля';
      break;
    case 8:
      textMonth = 'августа';
      break;
    case 9:
      textMonth = 'сентября';
      break;
    case 10:
      textMonth = 'октября';
      break;
    case 11:
      textMonth = 'ноября';
      break;
    case 12:
      textMonth = 'декабря';
      break;
    default:
      break;
  }

  if (textMonth) {
    return `${day} ${textMonth} ${year}`;
  }
  return _date;
}

export function validateFormFields(form: FormGroup, toastr: any) {
  const allFields = Object.keys(form.controls);
  let emptyField: string = '';
  allFields.forEach(f => {
    if (!form.get(f)?.value && form.get(f)?.status === 'INVALID') {
      if (!emptyField) {
        emptyField = f;
      }
      form.get(f)?.markAsTouched();
      form.get(f)?.markAsDirty();
    }
  });
  if (emptyField) {
    document.getElementById(emptyField)?.focus();
    errorMessage({ message: 'Не все поля заполнены' }, toastr);
  }
}
