import { MountDataResponse } from "@/app/types/mount";
import MountEntry from "@/components/mount-entry";

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

export type QCMountInfo = {
  name: string;
  href: string;
};

const POSSIBLE_MOUNTS: QCMountInfo[] = [
  {
    name: "Rivendare's Deathcharger",
    href: "https://www.wowhead.com/item=13335/deathchargers-reins",
  },
  {
    name: "Raven Lord",
    href: "https://www.wowhead.com/item=32768/reins-of-the-raven-lord",
  },
  {
    name: "Swift White Hawkstrider",
    href: "https://www.wowhead.com/item=35513/swift-white-hawkstrider",
  },
  {
    name: "Blue Proto-Drake",
    href: "https://www.wowhead.com/item=44151/reins-of-the-blue-proto-drake",
  },
  {
    name: "Drake of the North Wind",
    href: "https://www.wowhead.com/item=63040/reins-of-the-drake-of-the-north-wind",
  },
  {
    name: "Vitreous Stone Drake",
    href: "https://www.wowhead.com/item=63043/reins-of-the-vitreous-stone-drake",
  },
  {
    name: "Armored Razzashi Raptor",
    href: "https://www.wowhead.com/item=68823/armored-razzashi-raptor",
  },
  {
    name: "Swift Zulian Panther",
    href: "https://www.wowhead.com/item=68824/swift-zulian-panther",
  },
  {
    name: "Infinite Timereaver",
    href: "https://www.wowhead.com/item=133543/reins-of-the-infinite-timereaver",
  },
  {
    name: "Midnight",
    href: "https://www.wowhead.com/item=142236/midnights-eternal-reins",
  },
  {
    name: "Sharkbait",
    href: "https://www.wowhead.com/item=159842/sharkbaits-favorite-crackers",
  },
  {
    name: "Tomb Stalker",
    href: "https://www.wowhead.com/item=159921/mummified-raptor-skull",
  },
  {
    name: "Underrot Crawg",
    href: "https://www.wowhead.com/item=160829/underrot-crawg-harness",
  },
  {
    name: "Mechagon Peacekeeper",
    href: "https://www.wowhead.com/item=168826/mechagon-peacekeeper",
  },
  {
    name: "Marrowfang",
    href: "https://www.wowhead.com/item=181819/marrowfangs-reins",
  },
  {
    name: "Cartel Master's Gearglider",
    href: "https://www.wowhead.com/item=186638/cartel-masters-gearglider",
  },
];

const DROP_CHANCE = 13.333;

const Page = async ({
  params,
}: {
  params: { realm: string; character: string };
}) => {
  const mountData = await getMountData(params.realm, params.character);

  const collectedMounts = mountData.mounts.map((md) => md.mount.name);
  const missingCount = POSSIBLE_MOUNTS.filter(
    (pm) => !collectedMounts.includes(pm.name)
  ).length;

  return (
    <div className="flex flex-col items-center mx-auto space-y-4 text-center">
      <div>
        {POSSIBLE_MOUNTS.map((pm) => (
          <MountEntry
            key={pm.name}
            info={pm}
            collected={collectedMounts.includes(pm.name)}
          />
        ))}
      </div>
      <div>
        <p>
          You are missing {missingCount}/{POSSIBLE_MOUNTS.length} mounts.
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
