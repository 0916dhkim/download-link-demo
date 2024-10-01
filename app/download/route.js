import { NextResponse } from "next/server";

export async function GET() {
  const fromGoogleStorage = await fetch(
    "https://storage.googleapis.com/lifeat-dtest.appspot.com/7451xznI4ugglFhX6NZ1ymKc0Gg2/batRKM1bg2TChV991VkM/combine_output.mp4?Expires=2043033352&GoogleAccessId=firebase-adminsdk-9p92t%40lifeat-dtest.iam.gserviceaccount.com&Signature=GoCdvQzyqyyOhxxIVlrr0A8PUHNI2VnbOVV3aD3phSlfxOQlXWPe%2B8fjIJ%2FjddvFJ13nhjRBw7%2F2bzknPNi5pNks38gCxd4zFclVmzNG8EP17Z2VJvOqg09%2B9zf6sufRZXHZeCazeQpApBgHDSBb7Ed2oXNx7fo21SfBymanOgkQZm%2BFN2STDuppKKUtI1UA%2BopH0hh9GHAH4ouHLkmyPtZWpD8%2FA3haZn0rpq8DgtY2iTYEGn6k3wTYYj5dIXj5zonf2oyziJ7nto7ctE0nMfOTdentcjDmnWsrbUrLYXWtyZ93wU1QGCZlK4NQtnJELssvA1JF8BQ5qdN6F1lknQ%3D%3D",
  );
  const filename = "video.mp4";
  const response = new NextResponse(fromGoogleStorage.body, {
    // These headers will make the link open the download popup.
    headers: {
      "Content-Disposition": `attachment; filename=${filename}`,
      "Content-Type": "application/octet-stream",
    },
  });

  return response;
}
