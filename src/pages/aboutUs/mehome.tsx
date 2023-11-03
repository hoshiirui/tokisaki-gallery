import Footer from "@/components/widgets/footer/Footer";
import HimawariHeader from "@/components/widgets/header/HimawariHeader";
import Navbar from "@/components/widgets/navbar/Navbar";
import {
  Box,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import RFIDatas from "../../data/meHomeRFI.json";

const mehome = () => {
  return (
    <Box>
      <Head>
        <title>{"MeHome - Tokisaki Gallery"}</title>
      </Head>
      <Navbar />
      <HimawariHeader
        title="MeHome Application"
        desc="Application UI/UX Design"
        hasShortExplanation="MeHome “Find Your Exquisite Home” adalah sebuah aplikasi rental kos, apartemen, dan tempat tinggal sewa yang menyediakan solusi yang praktis dan efisien bagi pengguna yang mencari tempat tinggal yang sesuai dengan kebutuhan dan kriteria pengguna. "
      />
      <Box minH={"100vh"} px={"135px"} py={"40px"}>
        <Image
          src="../assets/aboutus/rangga/portfolio/ptr1/mehomethumb.jpg"
          width={"100vw"}
        />
        <Box my={"60px"}>
          <VStack gap={"4px"} my={"40px"}>
            <Text
              fontSize={"36px"}
              letterSpacing={"4px"}
              textTransform={"uppercase"}
            >
              Fitur Unggulan
            </Text>
            <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
              Berikut merupakan fitur-fitur unggulan yang dimiliki oleh aplikasi
              MeHome
            </Text>
          </VStack>
          <Image
            src="../assets/aboutus/rangga/portfolio/ptr1/fiturunggulan.png"
            width={"100vw"}
            py={"30px"}
          />
        </Box>

        <Box my={"60px"}>
          <VStack gap={"4px"} my={"30px"}>
            <Text
              fontSize={"36px"}
              letterSpacing={"4px"}
              textTransform={"uppercase"}
            >
              User Persona
            </Text>
            <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
              Berdasarkan permasalahan dan hasil research, disusun User Persona
              sebagai berikut:
            </Text>
          </VStack>
          <Image
            src="../assets/aboutus/rangga/portfolio/ptr1/userpersona.jpg"
            width={"100vw"}
            py={"20px"}
          />
        </Box>

        <Box my={"60px"}>
          <VStack gap={"4px"} my={"30px"}>
            <Text
              fontSize={"36px"}
              letterSpacing={"4px"}
              textTransform={"uppercase"}
            >
              User Journey Map
            </Text>
            <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
              Berdasarkan User Persona, disusun User Journey Map sebagai
              berikut:
            </Text>
          </VStack>
          <Image
            src="../assets/aboutus/rangga/portfolio/ptr1/userjourneymap.jpg"
            width={"100vw"}
            py={"20px"}
          />
        </Box>

        <Box my={"60px"}>
          <VStack gap={"4px"} my={"30px"}>
            <Text
              fontSize={"36px"}
              letterSpacing={"4px"}
              textTransform={"uppercase"}
            >
              Information Architexture
            </Text>
            <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
              Setelah membangun User Journey Map, saya menyusun Information
              Architexture berdasarkan fitur-fitur unggulan yang sudah saya
              rencanakan.
            </Text>
          </VStack>
          <Image
            src="../assets/aboutus/rangga/portfolio/ptr1/informationarchitexture.png"
            width={"100vw"}
            py={"20px"}
          />
        </Box>
      </Box>

      <HimawariHeader
        title="Style Guides"
        desc="Berikut adalah style yang digunakan dalam aplikasi ini"
      />

      <Box minH={"100vh"} px={"135px"} py={"10px"}>
        <Image
          src="../assets/aboutus/rangga/portfolio/ptr1/styleguide.png"
          width={"100vw"}
        />
        <Box my={"60px"}>
          <VStack gap={"4px"} my={"40px"}>
            <Text
              fontSize={"36px"}
              letterSpacing={"4px"}
              textTransform={"uppercase"}
            >
              Moodboard
            </Text>
            <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
              Berikut adalah inpsirasi-inpsirasi yang saya kumpulkan sebagai
              Moodboard untuk membuat aplikasi MeHome
            </Text>
          </VStack>
          <Image
            src="../assets/aboutus/rangga/portfolio/ptr1/moodboard.jpg"
            width={"100vw"}
            py={"30px"}
          />
        </Box>

        <Box my={"60px"}>
          <VStack gap={"4px"} my={"40px"}>
            <Text
              fontSize={"36px"}
              letterSpacing={"4px"}
              textTransform={"uppercase"}
            >
              Brand Identity
            </Text>
            <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
              Berikut adalah identitas dari aplikasi yang saya buat dan
              penjelasannya
            </Text>
          </VStack>
          <Image
            src="../assets/aboutus/rangga/portfolio/ptr1/brandidentity.jpg"
            width={"100vw"}
            py={"30px"}
          />
          <UnorderedList>
            <ListItem>
              <Text
                fontSize={"xl"}
                fontWeight={"semibold"}
                color="#84847C"
                textAlign={"justify"}
              >
                <Text as={"span"} fontWeight={"bold"} color={"#3a2e26"}>
                  Logo Rumah:
                </Text>{" "}
                berarti aplikasi ini merupakan aplikasi untuk pencarian
                rumah/tempat tinggal sewa
              </Text>
            </ListItem>
            <ListItem>
              <Text
                fontSize={"xl"}
                fontWeight={"semibold"}
                color="#84847C"
                textAlign={"justify"}
              >
                <Text as={"span"} fontWeight={"bold"} color={"#3a2e26"}>
                  Logo Segitiga Ke Atas:
                </Text>{" "}
                Seperti anak panah, yang menandakan bahwa kita mencari “tempat
                tinggal” baru pasti ada alasannya. Ini mengandung harapan bahwa
                orang yang mendapatkan “tempat tinggal” baru ini agar dapat jadi
                penunjang mereka untuk bisa terus maju dan menjalani hidupnya.
              </Text>
            </ListItem>
            <ListItem>
              <Text
                fontSize={"xl"}
                fontWeight={"semibold"}
                color="#84847C"
                textAlign={"justify"}
              >
                <Text as={"span"} fontWeight={"bold"} color={"#3a2e26"}>
                  Warna Oranye:
                </Text>{" "}
                Oranye adalah warna yang hangat dan nyaman. Ini bisa
                menggambarkan perasaan kenyamanan dan kehangatan yang ingin
                diberikan oleh aplikasi pemesanan kos, serta kos yang akan
                ditinggali kepada pengguna. Pengguna mungkin merasa bahwa mereka
                dapat merasa nyaman dan di rumah saat menggunakan aplikasi ini.
              </Text>
            </ListItem>
            <ListItem>
              <Text
                fontSize={"xl"}
                fontWeight={"semibold"}
                color="#84847C"
                textAlign={"justify"}
              >
                <Text as={"span"} fontWeight={"bold"} color={"#3a2e26"}>
                  Font Poppins:
                </Text>{" "}
                Poppins adalah font yang modern, bersih, dan mudah dibaca yang
                dapat memperkuat kesan profesional dan terpercaya pada aplikasi
                ini. Font ini bisa membantu menciptakan pengalaman pengguna yang
                positif dan memudahkan pengguna untuk menavigasi aplikasi yang
                dibangun.
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box my={"60px"}>
          <VStack gap={"4px"} my={"30px"}>
            <Text
              fontSize={"36px"}
              letterSpacing={"4px"}
              textTransform={"uppercase"}
            >
              Design System
            </Text>
            <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
              Berikut adalah design system dari aplikasi MeHome
            </Text>
          </VStack>
          <Image
            src="../assets/aboutus/rangga/portfolio/ptr1/designsystem.jpg"
            width={"100vw"}
            py={"20px"}
          />
        </Box>

        <Box my={"60px"}>
          <VStack gap={"4px"} my={"30px"}>
            <Text
              fontSize={"36px"}
              letterSpacing={"4px"}
              textTransform={"uppercase"}
            >
              Components
            </Text>
            <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
              Berikut adalah komponen-komponen yang digunakan dalam aplikasi
              MeHome
            </Text>
          </VStack>
          <Image
            src="../assets/aboutus/rangga/portfolio/ptr1/components.jpg"
            width={"100vw"}
            py={"20px"}
          />
        </Box>

        <Box my={"60px"}>
          <VStack gap={"4px"} my={"30px"}>
            <Text
              fontSize={"36px"}
              letterSpacing={"4px"}
              textTransform={"uppercase"}
            >
              Halaman Aplikasi
            </Text>
            <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
              Berikut adalah halaman aplikasi High Fidelity yang dibuat
            </Text>
          </VStack>
          <Image
            src="../assets/aboutus/rangga/portfolio/ptr1/prototype.jpg"
            width={"100vw"}
            py={"20px"}
          />
        </Box>
      </Box>

      {/* TESTING */}

      <HimawariHeader
        title="Hasil Pengujian"
        desc="Pain Points and Room for Improvement"
      />
      <Box minH={"100vh"} px={"135px"} py={"10px"}>
        <Image
          src="../assets/aboutus/rangga/portfolio/ptr1/hasilpengujian.png"
          width={"100vw"}
        />
        <Box my={"60px"}>
          <VStack gap={"4px"} my={"20px"}>
            <Text
              fontSize={"36px"}
              letterSpacing={"4px"}
              textTransform={"uppercase"}
            >
              Permasalahan dan Solusi
            </Text>
            <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
              Berikut adalah permaalahan-permasalahan yang ditemukan, solusi,
              beserta tingkat severitynya.
            </Text>
          </VStack>
          <Table variant="simple" mt={"50px"}>
            <Thead bgColor={"#3a2e26"}>
              <Tr>
                <Th fontSize={"16px"} fontWeight={"bold"} color={"white"}>
                  Responden
                </Th>
                <Th fontSize={"16px"} fontWeight={"bold"} color={"white"}>
                  Kategori
                </Th>
                <Th fontSize={"16px"} fontWeight={"bold"} color={"white"}>
                  Task
                </Th>
                <Th fontSize={"16px"} fontWeight={"bold"} color={"white"}>
                  Permasalahan
                </Th>
                <Th fontSize={"16px"} fontWeight={"bold"} color={"white"}>
                  Tag 1
                </Th>
                <Th fontSize={"16px"} fontWeight={"bold"} color={"white"}>
                  Tag 2
                </Th>
                <Th fontSize={"16px"} fontWeight={"bold"} color={"white"}>
                  Solusi
                </Th>
                <Th fontSize={"16px"} fontWeight={"bold"} color={"white"}>
                  Severity
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {RFIDatas.map((RFIData, index) => (
                <Tr key={index}>
                  <Td>{RFIData.username}</Td>
                  <Td>{RFIData.category}</Td>
                  <Td>{RFIData.task}</Td>
                  <Td>{RFIData.problem}</Td>
                  <Td textAlign={"center"}>{RFIData.tag1}</Td>
                  <Td textAlign={"center"}>{RFIData.tag2}</Td>
                  <Td>{RFIData.solusi}</Td>
                  <Td textAlign={"center"}>
                    <Text
                      color={
                        RFIData.severity === "High"
                          ? "red"
                          : RFIData.severity === "Medium"
                          ? "#c7ab22"
                          : "green"
                      }
                    >
                      {RFIData.severity}
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>

      {/* REDESIGN */}

      <HimawariHeader
        title="REDESIGN"
        desc="Perbaikan Aplikasi berdasarkan Pain Points"
      />
      <Box minH={"100vh"} px={"135px"} py={"10px"}>
        <Image
          src="../assets/aboutus/rangga/portfolio/ptr1/redesignthumb.jpg"
          width={"100vw"}
        />
        <Box my={"60px"}>
          <VStack gap={"4px"} my={"40px"}>
            <Text
              fontSize={"36px"}
              letterSpacing={"4px"}
              textTransform={"uppercase"}
            >
              Form Pendaftaran
            </Text>
            <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
              Berikut adalah before after dari tampilan form pendaftaran
            </Text>
          </VStack>
          <Image
            src="../assets/aboutus/rangga/portfolio/ptr1/redesign1.jpg"
            width={"100vw"}
            py={"30px"}
          />
          <Text fontSize={"24px"} fontWeight={"bold"} color={"red"}>
            Severity: High
          </Text>
          <Text fontSize={"22px"} textAlign={"justify"} color={"#84847C"}>
            Redesign pertama dilakukan pada form daftar akun dikarenakan dua
            responden mengatakan bahwa warna yang digunakan pada komponen
            tersebut kurang bisa terlihat dengan jelas. Solusi yang diterapkan
            adalah menggunakan warna yang lebih gelap agar konten dapat terlihat
            jelas.
          </Text>
        </Box>

        <Box my={"60px"}>
          <VStack gap={"4px"} my={"30px"}>
            <Text
              fontSize={"36px"}
              letterSpacing={"4px"}
              textTransform={"uppercase"}
            >
              Hasil Pencarian
            </Text>
            <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
              Berikut adalah before after dari tampilan halaman hasil pencarian
            </Text>
          </VStack>
          <Image
            src="../assets/aboutus/rangga/portfolio/ptr1/redesign2.jpg"
            width={"100vw"}
            py={"20px"}
          />
          <Text fontSize={"24px"} fontWeight={"bold"} color={"red"}>
            Severity: High
          </Text>
          <Text fontSize={"22px"} textAlign={"justify"} color={"#84847C"}>
            Redesign kedua dilakukan pada hasil pencarian. Salah satu responden
            berkomentar bahwa dia bingung saat melihat hasil pencarian tidak
            terfokus pada keyword yang dicari, melainkan tercampur dengan
            rekomendasi-rekomendasi rumah kos lainnya. Oleh karena itu saya
            memisahkan secara spesifik bagian hasil pencarian dan rekomendasi
            agar tidak membuat bingung.
          </Text>
        </Box>

        <Box my={"60px"}>
          <VStack gap={"4px"} my={"30px"}>
            <Text
              fontSize={"36px"}
              letterSpacing={"4px"}
              textTransform={"uppercase"}
            >
              Gambar Detail Kos
            </Text>
            <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
              Berikut adalah before after dari tampilan gambar pada halaman
              detail rumah kos.
            </Text>
          </VStack>
          <Image
            src="../assets/aboutus/rangga/portfolio/ptr1/redesign3.jpg"
            width={"100vw"}
            py={"20px"}
          />
          <Text fontSize={"24px"} fontWeight={"bold"} color={"red"}>
            Severity: High
          </Text>
          <Text fontSize={"22px"} textAlign={"justify"} color={"#84847C"}>
            Redesign ketiga dilakukan pada komponen gambar pada halaman detail
            rumah kos. Disini ditambahkan fitur agar user bisa melihat versi
            full dari gambar ketika gambar di klik. Hal ini akan mempermudah
            user untuk melihat detai dari foto-foto yang ada di halaman detail
            kamar kos. Redesign ini didasarkan oleh salah satu feedback
            responden pada saat testing.
          </Text>
        </Box>

        <Box my={"60px"}>
          <VStack gap={"4px"} my={"30px"}>
            <Text
              fontSize={"36px"}
              letterSpacing={"4px"}
              textTransform={"uppercase"}
            >
              Bagian Peraturan Kos
            </Text>
            <Text fontSize={"22px"} fontStyle={"italic"} color={"#84847C"}>
              Berikut adalah before after dari tampilan pada halaman detail
              rumah kos.
            </Text>
          </VStack>
          <Image
            src="../assets/aboutus/rangga/portfolio/ptr1/redesign4.jpg"
            width={"100vw"}
            py={"20px"}
          />
          <Text fontSize={"24px"} fontWeight={"bold"} color={"#c7ab22"}>
            Severity: Medium
          </Text>
          <Text fontSize={"22px"} textAlign={"justify"} color={"#84847C"}>
            Redesign terakhir dilakukan pada page detail halaman kos. Pada
            halaman ini ditambahkan informasi baru berupa &quot;Peraturan Kos
            &quot; bagi kos yang memiliki peraturan khusus. Redesign ini
            dilakukan berdasarkan feedback dari salah satu responden pada saat
            testing yang menceritakan pengalamannya bahwa beberapa kos memiliki
            peraturan tertentu. Dengan mengetahui peraturan-peraturan yang ada
            pada suatu kos diharapkan dapat menjadi bahan pertimbangan dalam
            pengambilan keptusan.
          </Text>
        </Box>
      </Box>

      <Footer isNotMainPage={true} />
    </Box>
  );
};

export default mehome;
