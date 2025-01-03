import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Input,
  CloseButton,
} from "@mantine/core";
import { NavLink as NavL } from "react-router-dom";
import { Suspense, useState } from "react";
import {
  faHome,
  faGraduationCap,
  faBook,
  faPhotoVideo,
  faNewspaper,
  faVideo,
  faCertificate,
  faPoll,
  faInfoCircle,
  faQuestionCircle,
  faGavel,
  faPlay,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./BaseLayout.module.css";

const BaseLayout = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [value, setValue] = useState("");

  return (
    <Suspense>
      <AppShell
        header={{ height: 60 }}
        footer={{ height: 60 }}
        navbar={{
          width: desktopOpened ? 300 : 80,
          breakpoint: "sm",
          collapsed: { mobile: !mobileOpened },
        }}
        padding="md">
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
            />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md" className={classes.BaseLayoutNavbar}>
          <Input
            size="md"
            placeholder={desktopOpened ? "Search" : ""}
            readOnly={!desktopOpened}
            mb="md"
            value={value}
            onChange={event => setValue(event.currentTarget.value)}
            rightSectionPointerEvents="all"
            leftSection={<FontAwesomeIcon icon={faSearch} size="lg" />}
            rightSection={
              desktopOpened && (
                <CloseButton
                  aria-label="Clear input"
                  onClick={() => setValue("")}
                  style={{ display: value ? undefined : "none" }}
                />
              )
            }
          />
          {menuItems?.map(({ label, to, icon }) => (
            <NavLink
              component={NavL}
              label={label}
              key={label}
              to={to}
              className={classes.link}
              leftSection={<FontAwesomeIcon icon={icon} size="lg" />}
            />
          ))}
        </AppShell.Navbar>
        <AppShell.Main>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quam
          quibusdam ratione rerum voluptatibus. Ad deleniti illum omnis unde?
          Aliquid animi architecto aspernatur aut autem, commodi consequatur
          corporis cum dolor dolores eius enim eos, eum exercitationem facilis
          in ipsa libero maxime necessitatibus officiis quae quidem quo quos
          repellat, sapiente sequi suscipit veniam veritatis voluptatem
          voluptatibus. Accusantium ad adipisci aliquam aliquid aspernatur atque
          aut cum distinctio dolore, dolorem dolores doloribus dolorum, esse
          fugiat id illo incidunt ipsam minima minus modi neque nesciunt numquam
          obcaecati officiis optio pariatur quos ratione recusandae sapiente
          sit, soluta ut vero voluptatibus. Consequatur consequuntur in magni
          veniam voluptas. Accusamus ad aliquam aliquid aperiam architecto
          asperiores atque autem consequuntur cupiditate delectus dicta
          distinctio dolor dolores dolorum earum est ipsa itaque laudantium
          libero magnam molestias mollitia necessitatibus non officiis porro qui
          quod recusandae sed, sint, sunt veritatis, vitae voluptate voluptatum?
          Adipisci, aliquam amet debitis ea eveniet facilis fugit laborum minima
          numquam officia omnis, optio quae quibusdam quis, repellat?
          Accusantium amet aspernatur culpa cumque delectus deleniti dicta
          dignissimos doloremque eaque eos est eveniet ex expedita facere iusto
          labore laudantium maxime, minima minus modi nesciunt nihil odit
          officiis perferendis perspiciatis porro possimus quae quasi qui quis
          reiciendis repudiandae saepe sequi, soluta sunt ullam veritatis. Cum
          ducimus exercitationem libero temporibus vero? Dolor ipsa nam nihil
          quasi quidem veniam? Alias at atque aut cum fuga illo, maxime placeat
          qui quibusdam repudiandae similique sint sunt vero. Accusamus ea et
          ipsum porro quasi quod sit voluptatibus? Alias aliquam assumenda
          blanditiis cumque cupiditate, debitis dicta distinctio dolor dolore
          doloremque ea esse eum inventore ipsam libero magnam maiores, maxime
          minus nisi nulla optio quaerat quibusdam sed similique suscipit totam
          ullam voluptates! Ab aperiam labore laudantium veniam voluptas?
          Adipisci amet consequatur excepturi explicabo porro? Ad consequuntur
          ducimus eligendi fuga id iure iusto magni minus nam, nobis quia, quo
          repellendus suscipit. Culpa harum ipsam libero sint. Accusamus ad,
          alias aliquam asperiores aspernatur autem culpa cumque cupiditate
          excepturi fugiat fugit incidunt nam nemo nisi nobis nulla odio placeat
          possimus qui, quibusdam tempora totam voluptatem voluptates? Ad amet
          dicta eligendi fuga ipsam laborum libero necessitatibus, nihil non
          porro quas qui sapiente ullam veritatis voluptates? Adipisci amet
          aperiam at debitis dolorum, ea eaque earum eius eum fugiat itaque
          molestias non nostrum nulla odit quasi quod rerum sed sequi similique
          temporibus veniam voluptas. Ad adipisci, aperiam aspernatur deserunt
          dolorem ex laudantium, magnam maxime minima officia omnis provident
          quia, rem sunt suscipit totam vitae voluptates voluptatum? Aliquid
          aspernatur cupiditate deserunt ducimus, et ex fugiat itaque nihil
          nobis quae similique soluta sunt voluptatibus? At consectetur cum
          cupiditate dolor eius magni nostrum quos reprehenderit rerum. Ad
          asperiores assumenda consequatur cumque, deserunt ducimus ea eaque eum
          explicabo fuga fugiat illo in incidunt itaque labore laudantium maxime
          nobis, non numquam odit optio placeat, rem reprehenderit saepe sit vel
          veniam vitae. Accusantium aut cupiditate ipsa modi officia pariatur
          placeat provident quas quasi sequi. Ab animi eaque libero nesciunt
          quis repellat sapiente. Adipisci blanditiis consectetur error expedita
          iure libero, perferendis sed. Dolorum esse laboriosam ut veniam.
          Aspernatur distinctio enim id maiores non? Accusantium alias aperiam,
          atque consectetur delectus dignissimos dolorum eius eligendi ipsum
          laboriosam libero maxime nihil, obcaecati quam quibusdam recusandae
          sequi sunt tenetur? Delectus impedit incidunt itaque laboriosam
          nostrum quidem, soluta! Et ipsam, minima nulla odit praesentium
          quibusdam quo repellat saepe soluta totam, veniam veritatis,
          voluptates voluptatum. Architecto, aut commodi ducimus eos, expedita
          facilis, fugiat fugit illo itaque magni molestiae nesciunt obcaecati
          quaerat quam quo quod sapiente similique temporibus tenetur ut.
          Aspernatur at commodi corporis culpa cum deleniti dignissimos, dolorem
          doloremque error exercitationem harum id iste laborum libero magni
          maiores molestiae molestias necessitatibus neque nesciunt odio odit
          praesentium rem similique sunt unde veniam voluptatum. Aperiam commodi
          consectetur debitis eius est fugiat placeat reiciendis, voluptatum!
          Aliquam, assumenda culpa eveniet, explicabo harum hic in itaque
          laborum necessitatibus perspiciatis qui quisquam tenetur vel veniam
          voluptatibus! Ab ad architecto asperiores assumenda consectetur culpa
          deleniti deserunt dolorem doloribus hic illo mollitia necessitatibus
          nobis numquam quae, quisquam quo repellat repellendus similique sint
          tenetur unde voluptas voluptatibus! Accusamus aut corporis dolorem,
          expedita fugiat iusto magnam magni neque nihil odio. Eum illum
          recusandae soluta voluptate. Accusantium alias aperiam architecto
          corporis cupiditate distinctio illo impedit molestiae officia placeat
          possimus, praesentium quae rem saepe similique soluta temporibus ullam
          voluptates! Ab aliquid blanditiis corporis cum ducimus eius, est illo
          in iusto laborum molestiae nam neque placeat quis quo quod repudiandae
          ullam vero voluptate voluptatibus! Aliquam aperiam aspernatur dolores
          error fugiat impedit inventore optio sed vitae. In perferendis qui
          quia sint. Ad animi aspernatur assumenda commodi consequatur cumque
          debitis delectus dolorem doloremque est fuga fugiat harum hic id, in
          incidunt ipsum itaque iusto laudantium, maiores minus mollitia
          nesciunt nulla odio officia pariatur placeat quas qui quibusdam quis
          reiciendis repellendus saepe sapiente, sed tempore voluptas
          voluptates! Ab accusantium aliquam amet animi asperiores commodi culpa
          debitis eligendi enim error est et ex hic, inventore ipsum itaque iure
          magni molestias natus necessitatibus officiis optio perferendis porro
          quibusdam, quisquam, quo quod ratione repudiandae sequi sint sunt
          suscipit tenetur voluptatibus. At et fugiat harum illum in, incidunt,
          inventore nemo non quam quia ratione recusandae sequi temporibus.
          Accusantium adipisci alias, architecto aspernatur consectetur
          consequatur cum deleniti deserunt dicta dolor doloribus eaque earum
          esse eum eveniet explicabo facere harum hic illo incidunt ipsa, magnam
          magni minus modi molestiae molestias numquam odit quam, quidem quis
          quisquam quod reprehenderit sapiente sequi veniam vitae voluptatem!
          Amet architecto consectetur deserunt dicta doloremque ea eligendi
          error esse eum ipsa nemo nostrum numquam odio placeat praesentium
          provident quisquam rem saepe sed, tempora temporibus ut veniam
          voluptatem. Ab aut cumque harum iste officia optio sapiente. A ab
          accusantium aperiam, cumque debitis, dicta dolor doloremque ea esse
          est ex excepturi fuga harum in ipsum laboriosam laborum nihil nulla
          numquam officiis porro possimus quas quisquam quo ratione recusandae
          rerum similique suscipit totam, voluptate. Aliquid animi aperiam autem
          consequuntur corporis cupiditate ducimus eos esse ex excepturi
          expedita facilis harum ipsum iure iusto, molestias, natus nemo non
          numquam officiis omnis pariatur perspiciatis possimus quae quaerat
          quas quidem quis quisquam quod ratione repellat repellendus saepe sunt
          ullam vitae voluptate voluptatibus?
        </AppShell.Main>
        <AppShell.Footer p="md">Footer</AppShell.Footer>
      </AppShell>
    </Suspense>
  );
};

const menuItems = [
  { label: "Home", to: "home", icon: faHome },
  { label: "Курсы", to: "courses", icon: faGraduationCap },
  { label: "Энциклопедия", to: "encyclopedia", icon: faBook },
  { label: "Медиатека", to: "media", icon: faPhotoVideo },
  { label: "Новости", to: "news", icon: faNewspaper },
  { label: "Вебинары", to: "webinars", icon: faVideo },
  { label: "Сертификация", to: "certification", icon: faCertificate },
  { label: "Опросы", to: "polls", icon: faPoll },
  {
    label: "Информация об изделии",
    to: "product-information",
    icon: faInfoCircle,
  },
  { label: "Часто задаваемые вопросы", to: "faq", icon: faQuestionCircle },
  { label: "Правила", to: "rules", icon: faGavel },
  { label: "Аудиоплеер", to: "audio-player", icon: faPlay },
];

export default BaseLayout;
