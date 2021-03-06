import {
  assertSelectOption,
  clickButton,
  selectOption,
  selectorSelectByFormControlName,
  selectorSelectedByFormControlName
} from '../../shared/form';
import {simpleControlType} from '../../../../../main/angular/src/app/shared/form-util';

export class ControlPage {

  private static SAVE_BUTTON_SELECTOR = 'button[type="submit"]';

  public static async setType(t: TestController, controlType: string) {
    await selectOption(t, selectorSelectByFormControlName('controlType'), simpleControlType(controlType));
  }
  public static async assertType(t: TestController, controlType: string) {
    await assertSelectOption(t, selectorSelectedByFormControlName('controlType'), controlType);
  }

  public static async clickSave(t: TestController) {
    await clickButton(t, ControlPage.SAVE_BUTTON_SELECTOR);
  }
}
