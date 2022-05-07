import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  DadataAddress,
  DadataConfig,
  DadataSuggestion,
  DadataType,
} from '@kolkov/ngx-dadata';

import { User } from 'src/types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() isModalVisible = false;
  @Input() user: User | null = null;
  @Output() changeModalVisibility = new EventEmitter<boolean>();
  @Output() saveForm = new EventEmitter<User>();

  form = {
    id: 0,
    fio: '',
    address: '',
  };

  config: { [key in string]: DadataConfig } = {
    address: {
      apiKey: 'f0bbb326ff540f718d4241b0a69fb5dcc570e282',
      type: DadataType.address,
    },
    fio: {
      apiKey: 'f0bbb326ff540f718d4241b0a69fb5dcc570e282',
      type: DadataType.fio,
    },
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'].currentValue) {
      const {
        address,
        id = 0,
        lastName = '',
        firstName = '',
        middleName = '',
      } = changes['user'].currentValue;

      this.form = {
        id,
        address,
        fio: `${lastName} ${firstName} ${middleName}`,
      };
    }
  }

  closeModal() {
    this.changeModalVisibility.emit(false);
  }

  confirmSave() {
    const [lastName = '', firstName = '', middleName = ''] =
      this.form.fio.split(' ');

    this.saveForm.emit({
      id: this.form.id,
      address: this.form.address,
      lastName,
      firstName,
      middleName,
    });

    this.closeModal();
  }
}
