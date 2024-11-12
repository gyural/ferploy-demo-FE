export interface BoundingPoly {
  vertices: { x: number; y: number }[];
}

export interface NameCardResult {
  name: { text: string; keyText: string; confidenceScore: number; boundingPolys: BoundingPoly[] }[];
  company: { text: string; keyText: string; confidenceScore: number; boundingPolys: BoundingPoly[] }[];
  address: { text: string; keyText: string; confidenceScore: number; boundingPolys: BoundingPoly[] }[];
  position: { text: string; keyText: string; confidenceScore: number; boundingPolys: BoundingPoly[] }[];
  mobile: { text: string; keyText: string; confidenceScore: number; boundingPolys: BoundingPoly[] }[];
  tel: { text: string; keyText: string; confidenceScore: number; boundingPolys: BoundingPoly[] }[];
  fax: { text: string; keyText: string; confidenceScore: number; boundingPolys: BoundingPoly[] }[];
  email: { text: string; keyText: string; confidenceScore: number; boundingPolys: BoundingPoly[] }[];
  homepage: { text: string; keyText: string; confidenceScore: number; boundingPolys: BoundingPoly[] }[];
}

export interface NameCardMeta {
  estimatedLanguage: string;
}

export interface Image {
  uid: string;
  name: string;
  inferResult: string;
  message: string;
  validationResult: { result: string };
  nameCard: { meta: NameCardMeta; result: NameCardResult };
}

export interface OCRResponseData {
  results: {
    version: string;
    requestId: string;
    timestamp: number;
    images: Image[];
  }[];
}

export interface NameCardResponseData {
  address: string;
  homepage: string;
  mobile: string;
  name: string;
  email: string;
  position: string;
  tel: string;
}