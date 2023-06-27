import {
  AfterViewInit,
  ComponentRef,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Self,
  Input,
} from '@angular/core';
import {
  DynamicComponentFactoryFactory,
  DynamicComponentFactory,
} from '@app/core/helper/dynamic-component-factory';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { VariableComponent } from '../variable/variable.component';

@Component({
  selector: 'bb-binder',
  template: ``,
  providers: [
    DynamicComponentFactoryFactory, // IMPORTANT!
  ],
})
export class BinderComponent implements AfterViewInit, OnDestroy {
  private readonly factories: DynamicComponentFactory<any>[] = [];
  private readonly hostElement: Element;

  @Input() html: string;
  @Input() variables: any[];

  components: any[] = [
    VariableComponent,
    // ... add others
  ];

  constructor(
    // @Self - best practice; to avoid potential bugs if you forgot to `provide` it here
    @Self() private cmpFactory: DynamicComponentFactoryFactory,
    elementRef: ElementRef
  ) {
    this.hostElement = elementRef.nativeElement;
  }

  ngAfterViewInit(): void {
    this.hostElement.innerHTML = this.html;
    this.initFactories();
    this.createAllComponents();
  }

  private initFactories(): void {
    this.components.forEach(c => {
      const f = this.cmpFactory.create(c);
      this.factories.push(f);
    });
  }

  // Create components dynamically
  private createAllComponents(): void {
    const el = this.hostElement;
    const compRefs: ComponentRef<any>[] = [];
    this.factories.forEach(f => {
      const comps = f.create(el);
      compRefs.push(...comps);
      // Here you can make use of compRefs, filter them, etc.
      // to perform any custom operations, if required.
      compRefs
        .filter(c => c.instance instanceof VariableComponent)
        .forEach(c => {
          const id = c.location.nativeElement.attributes['var'].value;
          const variable = this.variables.find(
            (item: any) => item?.id === Number(id)
          );
          c.instance.value = variable?.value;
          c.instance.name = variable?.name;
          c.instance.id = variable?.id;
        });
    });
  }

  private removeAllComponents(): void {
    this.factories.forEach(f => f.destroy());
  }

  ngOnDestroy(): void {
    this.removeAllComponents();
  }
}
