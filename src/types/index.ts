interface IProduct {
	id: string;
  description: string;
  image: string;
	title: string;
  category: 'софт-скил' | 'хард-скил' | 'дополнительное' | 'кнопка' | 'другое';
	price: number | 'Бесценно';
  isInCart: boolean | null;
}

type TProductCard = Pick<IProduct, 'id' | 'image' | 'title' | 'category' | 'price'>;
type TProductCart = Pick<IProduct, 'id' | 'title' | 'price'>;

interface ICatalog {
    counter: number;
    catalog: HTMLElement[];
}

interface ICardsData {
  cards: IProduct[];
  preview: string | null;
  setCards(cards: IProduct[]): void;
  addToCart?(cardId: string): void;
  removeFromCard?(cardId: string): void;
  getCard(cardId: string): IProduct;
  getAddedProducts(): IProduct[];
  getTotalPrice(): number;
  resetAdded(): boolean
}

interface ICart {
	items: string[];
	total: number;
  disableButton(): void;
  refreshSerialNumber(): void;
	clearCart(): void;
}

interface IUser {
	payment: 'online' | 'cash';
	address: string;
	email: string;
	phone: string;
  getUserInfo(): TUserOrder | TUserContacts,
  setUserInfo(userData: TUserOrder | TUserContacts): void,
  checkUserValidation(data: Record<keyof TUserOrder | keyof TUserContacts, string>): boolean
}

type TUserOrder = Pick<IUser, 'payment' | 'address'>;
type TUserContacts = Pick<IUser, 'email' | 'phone'>;
