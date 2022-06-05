import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  IconButton,
} from "@chakra-ui/react";
import { FC, FormEvent, useState } from "react";
import { MdCancel, MdSearch } from "react-icons/md";
import { QueryVars } from "../queries/characters";

type StatusType = "alive" | "dead" | "unknown";
type GenderType = "female" | "male" | "genderless" | "unknown";

// eslint-disable-next-line no-unused-vars
const FilterMenu: FC<{ onSubmit: (filters: QueryVars) => void }> = ({
  onSubmit,
}) => {
  const [name, setName] = useState<string>();
  const [status, setStatus] = useState<StatusType>();
  const [species, setSpecies] = useState<string>();
  const [type, setType] = useState<string>();
  const [gender, setGender] = useState<GenderType>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({
      name,
      status,
      species,
      type,
      gender,
    });
  }

  function clearFilters() {
    setName("");
    setStatus(undefined);
    setSpecies("");
    setType("");
    setGender(undefined);
    onSubmit({});
  }

  return (
    <Flex flexDir="row">
      <form
        style={{
          width: "100%",
          gap: "8px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <FormControl>
          <FormLabel htmlFor="name">Character name</FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="E.g. Morty"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="status">Status</FormLabel>
          <Select
            id="status"
            placeholder="Select option"
            value={status}
            onChange={(e) => setStatus(e.target.value as StatusType)}
          >
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="species">Species</FormLabel>
          <Input
            id="species"
            type="text"
            placeholder="E.g. alien"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="type">Type</FormLabel>
          <Input
            id="type"
            type="text"
            placeholder="E.g. parasite"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="gender">Gender</FormLabel>
          <Select
            id="gender"
            placeholder="Select option"
            value={gender}
            onChange={(e) => setGender(e.target.value as GenderType)}
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </Select>
        </FormControl>
        <IconButton
          type="submit"
          aria-label="search"
          icon={<MdSearch />}
          variant="solid"
          colorScheme="green"
          fontSize="xl"
        />
        <IconButton
          type="button"
          aria-label="clear filters"
          icon={<MdCancel />}
          variant="outline"
          colorScheme="rnmRed"
          fontSize="xl"
          disabled={!(name || status || species || type || gender)}
          onClick={() => clearFilters()}
        />
      </form>
    </Flex>
  );
};

export default FilterMenu;
