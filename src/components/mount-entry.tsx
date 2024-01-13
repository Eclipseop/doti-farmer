import { QCMountInfo } from "@/app/[realm]/[character]/page";

type MountEntryProps = {
  info: QCMountInfo;
  collected: boolean;
};

const MountEntry = ({ info, collected }: MountEntryProps) => {
  return (
    <a href={info.href} target="_blank">
      <h1
        className={`${
          collected ? "text-green-400" : "text-red-400"
        } font-bold text-xl font-sans`}
      >
        {info.name}
      </h1>
    </a>
  );
};

export default MountEntry;
