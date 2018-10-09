/* tslint:disable:no-unused-variable */
import { NgModule } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { NgwWowModule } from '../wow.module';
import { NgwWowService } from './wow.service';
import { NgwWowConfig } from '../models/index';
import { WindowService } from './window.service';

describe('Service: NgwWow', () => {

  it('should create the service instance from providers...', () => {
    TestBed.configureTestingModule({
      providers: [WindowService, NgwWowService]
    });
    let service = TestBed.get(NgwWowService); // inject the service from root injector

    expect(service).toBeTruthy();
  });

  it('should create the service instance from module imports...', () => {
    TestBed.configureTestingModule({
      imports: [NgwWowModule]
    });

    let service = TestBed.get(NgwWowService); // inject the service from root injector

    expect(service).toBeTruthy();
  });

  it('should init WOW library when calling init() without config', () => {
    TestBed.configureTestingModule({
      imports: [NgwWowModule]
    });
    let service = TestBed.get(NgwWowService); // inject the service from root injector

    service.init();

  });

  it('should emit itemRevealed$ event when calling callback() callback', () => {
    TestBed.configureTestingModule({
      imports: [NgwWowModule]
    });

    let service = TestBed.get(NgwWowService); // inject the service from root injector
    let config = new NgwWowConfig();

    service.init(config);

    let calls = 0;
    service.itemRevealed$.subscribe(() => calls++);

    config.callback(null/*box*/);
    config.callback(null/*box*/);

    expect(calls).toEqual(2);

  });
});
