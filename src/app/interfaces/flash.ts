export interface Flash {
    message: string;
    type: FlashType;
    keepAfterLocationChange: boolean;
}

export enum FlashType {
    Error = "error",
    Success = "success",
}