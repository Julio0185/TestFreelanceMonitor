import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Pricing } from './components/pricing/pricing';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Services, Pricing, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
