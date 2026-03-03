import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  activeTab = signal<'existing' | 'custom'>('custom');
}
