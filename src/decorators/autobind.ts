export function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFun = originalMethod.bind(this);
        return boundFun;
      },
    };
    return adjustedDescriptor;
  }