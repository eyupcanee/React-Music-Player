import { v4 } from "uuid";

function chill() {
  return [
    {
      name: "Landing",
      artist: "dryhope",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff71a5b603ba9f037ec9fa29bdff881c7e447ed9-1024x1024.jpg",
      id: v4(),
      active: true,
      color: ["#1A4250", "#34302F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8100",
    },
    {
      name: "Crush On You",
      artist: "Finding Hope",
      cover:
        "https://images.wallpaperscraft.com/image/single/girl_silhouette_moon_122062_1280x1280.jpg",
      id: v4(),
      active: false,
      color: ["#BA5064", "#385094"],
      audio:
        "https://cdn.discordapp.com/attachments/908366501751443487/1022122438965858404/finding-hope-crush-on-you-lyrics.mp3",
    },
    {
      name: "Pieces",
      artist: "Andrew Belle",
      cover:
        "https://images.wallpaperscraft.com/image/single/drops_glass_blurred_170441_1280x1280.jpg",
      id: v4(),
      active: false,
      color: ["#C1882A", "#161615"],
      audio:
        "https://cdn.discordapp.com/attachments/1022555364119556228/1022555818043920425/Andrew_Belle_-_Pieces_-_Official_Music_Video.mp3",
    },
    {
      name: "Brown Eyes",
      artist: "Imfinenow & Roiael",
      cover:
        "https://images.wallpaperscraft.com/image/single/silhouette_starry_sky_night_131758_1280x1280.jpg",
      id: v4(),
      active: false,
      color: ["#F97E59", "#161615"],
      audio:
        "https://cdn.discordapp.com/attachments/1022555364119556228/1022555854744072283/imfinenow-roiael-brown-eyes-lyrics.mp3",
    },
    {
      name: "I Said I Love You",
      artist: "Matthew Zeitler",
      cover:
        "https://images.wallpaperscraft.com/image/single/silhouette_girl_dark_166837_1280x1280.jpg",
      id: v4(),
      color: ["#C8EAFA", "#29323C"],
      audio:
        "https://cdn.discordapp.com/attachments/1022555364119556228/1022567559553351741/matthew-zeitler-i-said-i-love-you-official-lyric-video.mp3",
    },
    {
      name: "Glaciar",
      artist: "Juan Rios, chief",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg",
      id: v4(),
      active: false,
      color: ["#FF7661", "#614576"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21648",
    },
    {
      name: "Never Felt The Same",
      artist: "Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/05/be399329e137d6d507393565bacd8e9193c44b07-1024x1024.jpg",
      id: v4(),
      active: false,
      color: ["#ECA2A3", "#42213C"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7810",
    },
    {
      name: "Home",
      artist: "Idealism, SwuM",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/07/e4292fd3128da3eb44c528641e120ab67be129a9-1024x1024.jpg",
      id: v4(),
      active: false,
      color: ["#A89061", "#161B38"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=43679",
    },
  ];
}

export default chill;
