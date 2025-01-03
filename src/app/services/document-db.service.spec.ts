import { TestBed } from '@angular/core/testing';

import { DocumentDBService } from './document-db.service';

describe('DocumentDBService', () => {
  let service: DocumentDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
