import { Component } from '@angular/core';
import { AwsDynamoService } from './services/aws-dynamo.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  items: any;
  constructor(private dynamo: AwsDynamoService) {}

  async ngOnInit() {
    await this.loadItems();
    
  }

  loadItems() {
    this.dynamo.getItems('origin-tb')
      .then(data => {
        this.items = data.Items;
        console.log(this.items)
      })
      .catch(error => {
        console.error('Error al obtener items:', error);
      });
  }

  deleteItem(item: any) {
    this.dynamo.deleteItem('NombreDeTuTabla', { id: item.id })
      .then(() => {
        console.log('Ítem eliminado con éxito');
        this.loadItems(); // Recargar los datos después de eliminar
      })
      .catch(error => {
        console.error('Error al eliminar ítem:', error);
      });
  }
}
