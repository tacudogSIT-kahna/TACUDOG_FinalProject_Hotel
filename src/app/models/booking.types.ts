export interface BookingReceipt {
  guestName: string;
  guestEmail: string;
  roomName: string;
  roomBasePrice: number;
  extraGuestsCount: number;
  extraGuestsTotalFee: number;
  singleNightRoomRate: number;
  nights: number;
  totalRoomCost: number;
  restaurantCoverage: string | null;
  restaurantCost: number;
  grandTotal: number;
}