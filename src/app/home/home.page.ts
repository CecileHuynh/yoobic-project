import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Constants} from '../constants';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public loginForm: FormGroup;
  public passwordType = 'password';
  public passwordIcon = 'eye';

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(Constants.email_regex),
      ])),
      password: ['', Validators.required]
    });
  }

  hideShowPassword() {
    console.log("hel");
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  public passwordInputIsInTextMode(): boolean {
    return this.passwordType === 'text';
  }

  navigateToMissionList() {
    this.navCtrl.navigateForward('/home');
  }

}
