import { TestBed } from '@angular/core/testing';

import { AfchatService } from './afchat.service';

describe('AfchatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfchatService = TestBed.get(AfchatService);
    expect(service).toBeTruthy();
  });
});
