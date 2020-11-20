import { Router, CanActivate, NavigationExtras, ActivatedRouteSnapshot } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface RedirectionExtras extends NavigationExtras {
    target?: string;
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class RedirectService implements CanActivate {
  
    constructor(readonly router: Router, @Inject(DOCUMENT) readonly document: Document) { }
  
    /** The Window object from Document defaultView */
    get window(): Window { return this.document.defaultView; }
  
    /** Jumps instantly to the external link without the mediation of the router */
    public jump(url: string, target: string = '_blank'): Promise<boolean> {
  
      return new Promise<boolean>( (resolve, reject) => {
  
          try { resolve(!!this.window.open(url, target)); }
          catch(e) { reject(e); }
      });
    }
  
    /** Returns true if the given url looks external */
    public external(url: string): boolean {
      return /^http(?:s)?:\/{2}\S+$/.test(url);
    }
  
    /** Redirects to the specified external link with the mediation of the router */
    public redirect(url: string, extras?: RedirectionExtras): Promise<boolean> {
  
      // Extracts the target from the extras
      const target = extras && extras.target;
      // Compose the url link for redirection
      const link = "/redirect?url=" + url + (!!target ? "&=" + target : '');
      // Navigates with the router activat the redirection guard
      return this.router.navigateByUrl(link, extras);
    }
  
    /** Navigates to the given url, redirecting when necessary 
     * @param url An absolute URL. The function does not apply any delta to the current URL. 
     * When starting with 'http(s)://' triggers the external redirection. 
     * @param extras (optional). An object containing properties that modify the navigation strategy. 
     * The function ignores any properties that would change the provided URL. 
     */
    public navigate(url: string, extras?: RedirectionExtras): Promise<boolean> {
  
      return this.external(url) ? 
        // Redirects to external link
        this.redirect(url, extras) : 
        // Navigates with the router otherwise 
        this.router.navigateByUrl(url, extras);
    }
  
    canActivate(route: ActivatedRouteSnapshot) {
  
      // Gets the url query parameter, if any
      const url = route.queryParamMap.get('url');
      // If the url matches an external link, redirects stopping the route activation
      if( this.external(url) ) { 
        // Gets the optional target, when specified
        const target = route.queryParamMap.get('target');
        // Jumps to the external resource
        return this.jump(url, target).then(() => false); 
      }
      // Goes on activating the requested route, most likely to NotFound
      return true;
    }
  }