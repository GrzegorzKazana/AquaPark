import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "antd";

const AgreementsModal = ({ open, handleClose }) => {
  const footer = (
    <Button type="primary" onClick={handleClose}>
      Ok
    </Button>
  );

  return (
    <Modal title="REGULAMIN" visible={open} onOk={handleClose} footer={footer}>
      <ul>
        <li>
          <p>
            Niniejszy regulamin służy zachowaniu bezpieczeństwa, porządku i
            czystości i obowiązuje wszystkich klientów przebywających na jego
            terenie.
          </p>
        </li>
        <li>
          <p>
            Osoby znajdujące się na terenie Aquaparku są zobowiązane
            podporządkować się instrukcjom oraz poleceniom ratowników wodnych
            pełniących dyżur oraz innym pracowników pływalni.
          </p>
        </li>
        <li>
          <p>
            Na terenie Obiektu znajduje się system monitoringu wizyjnego wraz z
            zapisem. Nagrania z kamer mogą być podstawą do pociągnięcia do
            odpowiedzialności w stosunku do użytkowników, którzy nie stosują się
            do regulaminu oraz instrukcji. Kierownictwo Obiektu gwarantuje, iż
            monitoringpowadzony jest w sposób nienaruszający dóbr osobistych
            oraz godności użytkowników.
          </p>
        </li>
        <li>
          <p>
            Kierownictwo obiektu może czasowo ograniczyć wstęp do Aquaparku ze
            względu na przekroczenie maksymalnej liczby osób korzystających.
          </p>
        </li>
        <li>
          <p>Zmiana ubrania na strój basenowy odbywa się w przebieralniach.</p>
        </li>
        <li>
          <p>
            Za rzeczy pozostawione bez nadzoru na terenie Obiektu, kierownictwo
            Obiektu nie odpowiada.
          </p>
        </li>
        <li>
          <p>
            Na terenie hali basenowej obowiązuje wyłącznie czysty strój
            kąpielowy, spełniający wymogi higieniczne oraz estetyczne,
            nieposiadający zamków błyskawicznych albo innych wstawek metalowych
            lub plastikowych, mogących stanowić zagrożenie dla zdrowia lub
            bezpieczeństwa korzystającego jak również być przyczyną uszkodzeń
            elementów wyposażenia Aquaparku
          </p>
        </li>
        <li>
          <p>
            Ratownikami są osoby noszące żółte koszulki z napisem RATOWNIK oraz
            czerwone spodenki, kadra kierownicza – koszulki białe
          </p>
        </li>
        <li>
          <p>
            Pomieszczenie centrum zarządzania służbą ratowniczą znajduje się po
            lewej stronie od wejścia z szatni na halę basenową. Osoby
            potrzebujące doraźnej pomocy lub opiekunowie poszukujący dzieci
            proszeni są skierowanie się do tego punktu.
          </p>
        </li>
        <li>
          <p>
            Ze względu na zapewnienie zasad higieny i bezpieczeństwa osobom
            znajdującym się na terenie obiektu nie wolno:
            <br />
            a. wchodzić do wody wbrew zakazowi ratowników, przy braku dyżuru
            służby ratowniczej oraz w czasie prowadzenia akcji ratowniczej,
            <br />
            b. przebywać w stanie wskazującym na stan nietrzeźwości lub pod
            wpływem środka odurzającego,
            <br />
            c. wnosić i spożywać środków odurzających oraz napojów alkoholowych,
            zawyjątkiem napojów z obniżoną zawartością alkoholu zakupionych na
            terenie obiektu.
            <br />
            d. używać strojów i przedmiotów w sposób widoczny zabrudzonych lub
            które mogą wchodzić w reakcje chemiczne z wodą,
            <br />
            e. nurkować oraz skakać do wody bez zgody lub wbrew zakazowi
            ratownika,
            <br />
            f. wnosić opakowań szklanych, puszek, ostrych narzędzi, broni oraz
            innych niebezpiecznych przedmiotów,
            <br />
            g. biegać, popychać i wrzucać do wody, krzyczeć oraz zachowywać się
            w sposób zagrażający bezpieczeństwu własnemu oraz innych
            użytkowników obiektu,
            <br />
            h. wszczynać fałszywych alarmów,
            <br />
            i. wrzucać do wody jakichkolwiek przedmiotów.
          </p>
        </li>
        <li>
          <p>
            Osoby niszczące lub uszkadzające wyposażenie lub urządzenia obiektu
            ponoszą pełną odpowiedzialność materialną za wyrządzone szkody.
          </p>
        </li>
        <li>
          <p>Uwagi i wnioski należy zgłaszać w punkcie informacji.</p>
        </li>
        <li>
          <p>
            O innych sprawach nieobjętych niniejszym Regulaminem decydują
            przepisy ogólne oraz kierownictwo obiektu.
          </p>
        </li>
        <li>
          <p>
            Aquapark nie ponosi odpowiedzialności za jakiekolwiek zdarzenia
            wynikłez nie przestrzegania niniejszego regulaminu.
          </p>
        </li>
        <li>
          <p>
            Podstawę prawną przetwarzania danych osobowych stanowi art. 6 ust. 1
            lit. b ogólnego rozporządzenia o ochronie danych osobowych (RODO) –
            przetwarzanie jest konieczne do wykonywania umowy (świadczenia
            usług).Osobom, których dane są przetwarzane, przysługuje prawo
            dostępu do nich, i ich poprawiania, usuwania, sprzeciwu wobec ich
            przetwarzania oraz żądania ich przeniesienia do innego
            administratora danych, a także prawo wniesienia skargi do organu
            nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych. Dane
            przetwarzane będą przez okres niezbędny do wykonania usługi. Kontakt
            z administratorem danych osobowych jest możliwy pod numerem telefonu
            22 222 22 22.
          </p>
        </li>
      </ul>
    </Modal>
  );
};
export default AgreementsModal;

AgreementsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
