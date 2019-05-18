import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public loginForm: FormGroup;
  public passwordType = 'password';
  public passwordIcon = 'eye';

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private toastCtrl: ToastController) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(Constants.email_regex),
      ])),
      password: ['', Validators.required]
    });
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  public passwordInputIsInTextMode(): boolean {
    return this.passwordType === 'text';
  }

  navigateToMissionList() {
    if (this.loginForm.valid) {
      this.navCtrl.navigateForward('/menu/blank');
    }
    else {
      this.showErrorMessage("Data are not correct or missing");
    }
  }

  async showErrorMessage(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
    });
    toast.present();
  }

}
