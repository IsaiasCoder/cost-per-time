import { Component } from '@angular/core';
import { SwapButton } from '../../theme/swap-button/swap-button';
@Component({
  selector: 'app-navbar',
  imports: [SwapButton],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
