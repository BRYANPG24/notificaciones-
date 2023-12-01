// Clase Producto que representa un producto con un precio
class Producto {
    private precio: number;
    private observadores: Observador[] = [];
  
    constructor(private nombre: string, precioInicial: number) {
      this.precio = precioInicial;
    }
  
    // Agregar observadores interesados en cambios de precio
    agregarObservador(observador: Observador) {
      this.observadores.push(observador);
    }
  
    // Cambiar el precio y notificar a los observadores
    cambiarPrecio(nuevoPrecio: number) {
      if (nuevoPrecio < this.precio) {
        this.precio = nuevoPrecio;
        this.notificarObservadores();
      }
    }
  
    // Notificar a todos los observadores
    private notificarObservadores() {
      this.observadores.forEach((observador) => {
        observador.actualizar(this.nombre, this.precio);
      });
    }
  }
  
  // Interfaz Observador que deben implementar los clientes interesados en cambios de precio
  interface Observador {
    actualizar(nombreProducto: string, nuevoPrecio: number): void;
  }
  
  // Clase Cliente que implementa la interfaz Observador y recibe notificaciones de cambio de precio
  class Cliente implements Observador {
    constructor(private nombre: string) {}
  
    // Método llamado por el producto para notificar cambios de precio
    actualizar(nombreProducto: string, nuevoPrecio: number) {
      console.log(`¡${this.nombre}, el precio del producto "${nombreProducto}" ha bajado a $${nuevoPrecio}!`);
    }
  }
  
  // Ejemplo de uso
  const producto = new Producto("Laptop", 1000);
  
  const cliente1 = new Cliente("Cliente1");
  const cliente2 = new Cliente("Cliente2");
  
  producto.agregarObservador(cliente1);
  producto.agregarObservador(cliente2);
  
  // Simulación de cambios en el precio del producto
  producto.cambiarPrecio(900); // Cliente1 y Cliente2 deberían recibir notificaciones
  producto.cambiarPrecio(1100); // No debería haber notificaciones
  
  
