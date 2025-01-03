import { TestBed } from '@angular/core/testing';

import { AwsDynamoService } from './aws-dynamo.service';

describe('AwsDynamoService', () => {
  let service: AwsDynamoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsDynamoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
