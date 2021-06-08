export interface CartItemType {
    map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
    id: number;
    title: string;
    desc: string;
    price: number;
    date: string;
    categoty: string;
    userId: number;
    imageUrl: string;
    quantity: number;
  }