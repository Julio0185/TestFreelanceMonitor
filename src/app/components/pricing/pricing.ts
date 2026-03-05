import { Component, signal } from '@angular/core';

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.html',
  styles: [],
})
export class Pricing {
  isAnnual = signal(true);

  plans: Plan[] = [
    {
      name: 'Basico',
      price: '$299',
      period: '/mes',
      description: 'Ideal para startups y proyectos iniciales.',
      features: [
        'Desarrollo web responsivo',
        'Hosting incluido',
        'Soporte por email',
        'SSL gratuito',
        '1 revision mensual',
      ],
      highlighted: false,
      cta: 'Empezar Gratis',
    },
    {
      name: 'Profesional',
      price: '$799',
      period: '/mes',
      description: 'Para empresas en crecimiento que necesitan mas.',
      features: [
        'Todo lo del plan Basico',
        'App movil multiplataforma',
        'Dashboard de analitica',
        'Soporte prioritario 24/7',
        'Integraciones API',
        'Backups diarios',
        '5 revisiones mensuales',
      ],
      highlighted: true,
      cta: 'Elegir Plan',
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/mes',
      description: 'Solucion completa para grandes organizaciones.',
      features: [
        'Todo lo del plan Profesional',
        'Infraestructura dedicada',
        'SLA garantizado 99.9%',
        'Consultor asignado',
        'Ciberseguridad avanzada',
        'Escalabilidad automatica',
        'Revisiones ilimitadas',
        'Capacitacion del equipo',
      ],
      highlighted: false,
      cta: 'Contactar Ventas',
    },
  ];

  toggleBilling() {
    this.isAnnual.update(v => !v);
  }
}
