## bs4-breakpoint ##
Detect breakpoint in bootstrap 4: 

EXAMPLE: https://darekf77.github.io/bs4-breakpoint/

How to use it
-------------
install it
```
npm i bs4-breakpoint
```


**import it**

```ts
@NgModule({
    imports: [Bs4BreakpointModule],
})
class { ... }
```

Create function insde your component  class to listen changes

```ts
@Component(...)
class ExampleComponent {

    newBreakpoint(e: Breakpoint) {
          // breakpoint detected
    }

}
    
```
put  **bs4-breakpoint** tag in component template:

```html
    <bs4-breakpoint (changed)="newBreakpoint($event)" ></bs4-breakpoint>
```

