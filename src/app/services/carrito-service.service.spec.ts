/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarritoServiceService } from './carrito-service.service';

describe('Service: CarritoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarritoServiceService]
    });
  });

  it('should ...', inject([CarritoServiceService], (service: CarritoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
