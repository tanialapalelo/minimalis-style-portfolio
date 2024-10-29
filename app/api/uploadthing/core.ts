import { createUploadthing, FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  projectImage: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
  .middleware(async ({ req }) => {
    // This code runs on your server before upload
    const user = await auth(req);

    // If you throw, the user will not be able to upload
    if (!user) throw new UploadThingError("Unauthorized");

    // Whatever is returned here is accessible in onUploadComplete as `metadata`
    return { userId: user.id };
  })
  .onUploadComplete(async ({ metadata, file }) => {
    const userId = (metadata as any).userId;
    console.log("Upload complete for userId:", userId);
    console.log("file url", file.url);
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;