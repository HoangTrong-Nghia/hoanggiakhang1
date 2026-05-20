import bearingNtnZwz from './assets/images/bearing_ntn_zwz_1779260291989.png';
import bearingCylindrical from './assets/images/bearing_cylindrical_1779262723097.png';
import bearingTapered from './assets/images/bearing_tapered_1779262740516.png';
import bearingSelfAligning from './assets/images/bearing_self_aligning_1779262759545.png';
import bearingSpherical from './assets/images/bearing_spherical_1779262776006.png';
import bearingThrust from './assets/images/bearing_thrust_1779262794908.png';
import bearingPillowBlock from './assets/images/bearing_pillow_block_1779262811521.png';
import bearingNeedle from './assets/images/bearing_needle_1779262829264.png';

export interface Product {
  id: number;
  name: string;
  series: string;
  brands: string[];
  bore_diameter: string;
  applications: string;
  image_placeholder: string;
  imageUrl: string;
  status: string;
}

export interface CategoryData {
  category: string;
  products: Product[];
}

export const BEARINGS_CATALOG: CategoryData = {
  category: "Ổ Bi & Vòng Bi",
  products: [
    {
      id: 1,
      name: "Ổ bi cầu một dãy (Deep Groove Ball Bearing)",
      series: "6000 / 6200 / 6300",
      brands: ["SKF", "NSK", "FAG", "NTN", "Koyo"],
      bore_diameter: "10mm - 200mm",
      applications: "Động cơ điện, bơm, hộp số",
      image_placeholder: "bearing_6200.jpg",
      imageUrl: bearingNtnZwz,
      status: "Còn hàng"
    },
    {
      id: 2,
      name: "Ổ bi đũa trụ (Cylindrical Roller Bearing)",
      series: "NU / NJ / NF / N",
      brands: ["SKF", "NSK", "FAG"],
      bore_diameter: "20mm - 500mm",
      applications: "Hộp số, máy cán, băng tải nặng",
      image_placeholder: "bearing_NU.jpg",
      imageUrl: bearingCylindrical,
      status: "Còn hàng"
    },
    {
      id: 3,
      name: "Ổ bi côn (Tapered Roller Bearing)",
      series: "30000 / 32000 / 33000",
      brands: ["SKF", "Timken", "FAG", "NTN"],
      bore_diameter: "15mm - 300mm",
      applications: "Cầu xe, cẩu trục, máy xây dựng",
      image_placeholder: "bearing_tapered.jpg",
      imageUrl: bearingTapered,
      status: "Còn hàng"
    },
    {
      id: 4,
      name: "Ổ bi lòng cầu hai dãy (Self-Aligning Ball Bearing)",
      series: "1200 / 2200 / 1300 / 2300",
      brands: ["SKF", "NSK", "FAG"],
      bore_diameter: "10mm - 150mm",
      applications: "Trục không đồng tâm, máy nông nghiệp",
      image_placeholder: "bearing_self_aligning.jpg",
      imageUrl: bearingSelfAligning,
      status: "Còn hàng"
    },
    {
      id: 5,
      name: "Ổ đũa lòng cầu (Spherical Roller Bearing)",
      series: "22000 / 23000",
      brands: ["SKF", "FAG", "NSK", "NTN"],
      bore_diameter: "25mm - 600mm",
      applications: "Cẩu trục, máy nghiền, quạt công nghiệp",
      image_placeholder: "bearing_spherical.jpg",
      imageUrl: bearingSpherical,
      status: "Còn hàng"
    },
    {
      id: 6,
      name: "Ổ bi chặn (Thrust Ball Bearing)",
      series: "51000 / 52000",
      brands: ["SKF", "NSK", "FAG"],
      bore_diameter: "10mm - 200mm",
      applications: "Jack thủy lực, trục đứng, máy tiện",
      image_placeholder: "bearing_thrust.jpg",
      imageUrl: bearingThrust,
      status: "Còn hàng"
    },
    {
      id: 7,
      name: "Gối đỡ vòng bi (Pillow Block / Bearing Housing)",
      series: "UCF / UCP / UCFL / UCT",
      brands: ["SKF", "NSK", "NTN", "Koyo"],
      bore_diameter: "20mm - 100mm",
      applications: "Băng tải, trục truyền động, quạt",
      image_placeholder: "bearing_housing.jpg",
      imageUrl: bearingPillowBlock,
      status: "Còn hàng"
    },
    {
      id: 8,
      name: "Ổ kim (Needle Roller Bearing)",
      series: "NA / NK / HK / BK",
      brands: ["INA", "SKF", "NSK"],
      bore_diameter: "5mm - 100mm",
      applications: "Hộp số xe máy, xi lanh khí nén",
      image_placeholder: "bearing_needle.jpg",
      imageUrl: bearingNeedle,
      status: "Liên hệ"
    }
  ]
};
