import MountEntry from "@/components/mount-entry";
import { MountDataResponse } from "@/types/mount";
import possibleMounts from "../../../../public/possible-mounts.json";

const getMountData = async (
  realm: string,
  character: string
): Promise<MountDataResponse> => {
  const data = await fetch(
    `https://us.api.blizzard.com/profile/wow/character/${realm}/${character.toLowerCase()}/collections/mounts?namespace=profile-us&locale=en_US&access_token=${
      process.env.BLIZZARD_ACCESS_TOKEN
    }`
  );

  return (await data.json()) as MountDataResponse;
};

const DROP_CHANCE = 13.333;

const Page = async ({
  params,
}: {
  params: { realm: string; character: string };
}) => {
  const mountData = await getMountData(params.realm, params.character);

  const collectedMounts = mountData.mounts.map((md) => md.mount.name);
  const missingCount = possibleMounts.filter(
    (pm) => !collectedMounts.includes(pm.name)
  ).length;

  return (
    <div className="flex flex-col items-center mx-auto space-y-4 text-center">
      <div>
        {possibleMounts.map((pm) => (
          <MountEntry
            key={pm.name}
            info={pm}
            collected={collectedMounts.includes(pm.name)}
          />
        ))}
      </div>
      <div>
        <p>
          You are missing {missingCount}/{possibleMounts.length} mounts.
        </p>
        <p>
          On average, it will take you {missingCount * DROP_CHANCE} runs to
          complete the collection.
        </p>
      </div>
    </div>
  );
};

export default Page;
