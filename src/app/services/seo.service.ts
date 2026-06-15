import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly siteName = 'Bolder Adventure Park';
  private readonly baseUrl = 'https://www.bolderadventurepark.com';
  private readonly defaultImage = 'https://www.bolderadventurepark.com/assets/After-hero-section/Attractions%20-%20A%20view%20from%20Mezz%201.jpg';

  constructor(private titleService: Title, private meta: Meta) {}

  update(config: SeoConfig): void {
    const fullTitle = config.path === '/'
      ? this.siteName + ' — Indoor Adventure Park, Grand Prairie TX'
      : `${config.title} — ${this.siteName}`;
    const url = `${this.baseUrl}${config.path ?? ''}`;
    const image = config.image ?? this.defaultImage;

    this.titleService.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: config.description });

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });

    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
