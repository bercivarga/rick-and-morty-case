import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  IconButton,
} from "@chakra-ui/react";
import { FC, FormEvent } from "react";
import { MdSearch } from "react-icons/md";
import { QueryVars } from "../queries/characters";

// eslint-disable-next-line no-unused-vars
const FilterMenu: FC<{ onSubmit: (filters: QueryVars) => void }> = ({
  onSubmit,
}) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
          <Input id="name" type="text" placeholder="E.g. Morty" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="status">Status</FormLabel>
          <Select id="status" placeholder="Select option">
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="species">Species</FormLabel>
          <Input id="species" type="text" placeholder="E.g. alien" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="type">Type</FormLabel>
          <Input id="type" type="text" placeholder="E.g. parasite" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="gender">Gender</FormLabel>
          <Select id="gender" placeholder="Select option">
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
          colorScheme="rnmMagenta"
          fontSize="xl"
        >
          Search
        </IconButton>
      </form>
    </Flex>
  );
};

export default FilterMenu;
